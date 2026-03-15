import { spawnSync } from "node:child_process";
import { existsSync, readdirSync } from "node:fs";
import { dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(scriptDir, "..");
const resumesDir = join(projectRoot, "docs", "resumes");
const typstBin = process.env.TYPST_BIN || "typst";

if (!existsSync(resumesDir)) {
    throw new Error(`Missing resumes directory: ${resumesDir}`);
}

const files = readdirSync(resumesDir)
    .filter((file) => extname(file) === ".typ")
    .sort();

if (files.length === 0) {
    throw new Error(`No .typ files found in ${resumesDir}`);
}

for (const file of files) {
    const inputPath = join(resumesDir, file);
    const outputPath = join(resumesDir, file.replace(/\.typ$/u, ".pdf"));

    console.log(`Compiling ${file} -> ${outputPath}`);

    const result = spawnSync(
        typstBin,
        ["compile", "--root", projectRoot, inputPath, outputPath],
        {
            cwd: projectRoot,
            stdio: "inherit"
        }
    );

    if (result.error) {
        throw result.error;
    }

    if (result.status !== 0) {
        throw new Error(`Typst compilation failed for ${file}`);
    }
}

export async function forEachTestDir(callback) {
    const passedArgs = process.argv.slice(3)

    const testDirs = passedArgs.length
        ? passedArgs
        : await fs.promises.readdir("./tests")

    for (const testDir of testDirs.filter((name) => !name.endsWith(".md"))) {
        await callback(testDir)
    }
}

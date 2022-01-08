export const virtualModulePlugin = () => ({
    name: "virtual-module-plugin",
    resolveId(id) {
        if (id === "virtual-module") {
            return id
        }
    },
    load(source) {
        if (source === "virtual-module") {
            return "export const value = 'test'"
        }
    },
})

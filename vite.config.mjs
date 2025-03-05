import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";
import url from "@rollup/plugin-url";

export default defineConfig({
    base: "/",
    plugins: [react(), svgr(), url()],
    resolve: {
        alias: {
            src: "/src",
            app: "/src/app",
            pages: "/src/pages",
            shared: "/src/shared",
            entities: "/src/entities",
            features: "/src/features",
            widgets: "/src/widgets",
        },
    },
});

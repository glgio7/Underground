/// <reference types="vite/client" />

interface ImportMetaEnv {
	// readonly VITE_SOME_ENV_VAR: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

import esbuild from 'esbuild';

const buildOptions = {
  platform: 'neutral',
  entryPoints: ['src/index.ts'], // 엔트리 파일
  bundle: true, // 모든 의존성을 번들링
  sourcemap: true, // 소스맵 생성
  minify: true, // minify 수행
};

// ESM 번들 생성
await esbuild.build({
  ...buildOptions,
  outfile: 'dist/index.js',
  format: 'esm',
});

// CJS 번들 생성
await esbuild.build({
  ...buildOptions,
  outfile: 'dist/index.cjs',
  format: 'cjs',
});

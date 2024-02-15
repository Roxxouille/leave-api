FROM oven/bun:1 AS build

COPY package.json bun.lockb tsconfig.json ./
RUN bun install --frozen-lockfile

COPY src ./src

ENV PORT=3000

CMD ["bun", "run", "src/index.ts"]
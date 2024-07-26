async function handle<T>(
    promise: Promise<T>,
): Promise<{ result: T | null; err: Error | null }> {
    try {
        const result = await promise;
        return { result, err: null };
    } catch (error) {
        return { result: null, err: error as Error };
    }
}

async function func(test: string, kek: number): Promise<string> {
    return `${test} ${kek}`;
}

async function main() {
    const { result, err } = await handle(func('test', 2));
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
}

main();

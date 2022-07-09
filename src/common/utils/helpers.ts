export const delay = async (ms: number = 1000) => new Promise((res) => setTimeout(res, ms));

export const isObject = (data: any) => {
    if (data === null && !Array.isArray(data)) return false;
    return typeof data === 'object';
};
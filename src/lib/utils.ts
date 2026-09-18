export const randomDate = function(min: Date, max: Date): Date {
    const minTime = min.getTime();
    const maxTime = max.getTime();
    return new Date(minTime + Math.random() * (maxTime - minTime));
}

export default class DateConverter {
    public getDateString(timeStamp: number): string {
        const date = new Date(timeStamp * 1000);
        return date.toLocaleDateString();
    }

    public getFullDateString(timeStamp: number): string {
        const date = new Date(timeStamp * 1000);
        return date.toLocaleString();
    }
}

export const dateConverter = new DateConverter();

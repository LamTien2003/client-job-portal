export const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
};

export const formatDateWithMonthAndYear = (dateString: string) => {
    const date = new Date(dateString);

    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    const formattedDate = `${month}/${year}`;
    return formattedDate;
};

export const formatDateValue = (dateString: string | Date) => {
    const date = new Date(dateString);

    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
};

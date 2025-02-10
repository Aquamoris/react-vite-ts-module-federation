declare module 'custom/SumTextTwoFields' {
    export const  SumTextTwoFields = (
        setFieldValue: (name: string, value: string | number) => void,
        values: {field1: string, field2: string}
    ) => {
        setFieldValue('field3', values.field1 + values.field2);
    };
}
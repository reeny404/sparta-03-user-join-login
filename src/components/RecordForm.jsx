import { Input } from "./Input";

function RecordForm({ refer, record = {} }) {
  return (
    <>
      <Input
        label="날짜"
        refer={(ref) => (refer.current[0] = ref)}
        val={record.date}
        type="date"
      />
      <Input
        label="항목"
        refer={(ref) => (refer.current[1] = ref)}
        val={record.item}
      />
      <Input
        label="금액"
        refer={(ref) => (refer.current[2] = ref)}
        val={record.amount}
      />
      <Input
        label="내용"
        refer={(ref) => (refer.current[3] = ref)}
        val={record.description}
      />
    </>
  );
}

export default RecordForm;

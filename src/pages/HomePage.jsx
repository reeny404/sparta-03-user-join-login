import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import expenseApi from "../api/expense.api";
import { Input } from "../components/Input";
import { RecordList } from "../components/RecordList";
import LocalStorage, { KEY } from "../utils/LocalStorage";
import useLoginStore from "../zustand/useLoginStore";
import {
  HomePageWrppaer,
  SectionCashRecords,
  SectionCreateCashRecord,
  SectionSelectingMonth,
  StyleButtonSelectingMonth,
} from "./HomePage.styled";

export function HomePage() {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [month, setMonth] = useState(Number(LocalStorage.get(KEY._02_MONTH)));
  const [records, setRecords] = useState([]);

  const user = useLoginStore((state) => state.user);

  const { data: recordList, isSuccess } = useQuery({
    queryKey: ["records"],
    queryFn: () => expenseApi.getList(),
  });

  useEffect(() => {
    if (isSuccess) {
      setRecords(recordList);
    }
  }, [isSuccess]);

  useEffect(() => {
    LocalStorage.set(KEY._02_MONTH, month);
    if (isSuccess) {
      setRecords(recordList);
    }

    setRecords((list) =>
      month
        ? list.filter(
            (record) => new Date(record.date).getMonth() + 1 === month
          )
        : list
    );
  }, [month]);

  const handleSaveRecord = () => {
    if (!item || !amount) {
      alert("유효한 항목, 금액을 입력해주세요.");
      return;
    }

    expenseApi.add(
      {
        date,
        item,
        amount,
        description,
      },
      user
    );

    setItem("");
    setAmount("");
    setDescription("");
  };

  return (
    <HomePageWrppaer>
      <SectionCreateCashRecord>
        <Input label="날짜" value={date} setValue={setDate} type="date" />
        <Input label="항목" value={item} setValue={setItem} />
        <Input label="금액" value={amount} setValue={setAmount} type="number" />
        <Input label="내용" value={description} setValue={setDescription} />
        <button onClick={handleSaveRecord}>저장</button>
      </SectionCreateCashRecord>
      <SectionSelectingMonth className="section-select-month">
        <div>
          {new Array(12).fill(0).map((_, i) => {
            const index = i + 1;
            return (
              <StyleButtonSelectingMonth
                key={index}
                selected={index === month ? "selected" : ""}
                onClick={() => {
                  const result = month === index ? null : index;
                  setMonth(result);
                }}
              >
                {index}월
              </StyleButtonSelectingMonth>
            );
          })}
        </div>
      </SectionSelectingMonth>
      <SectionCashRecords>
        {isSuccess ? <RecordList list={records} /> : <></>}
      </SectionCashRecords>
    </HomePageWrppaer>
  );
}

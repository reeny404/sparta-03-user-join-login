import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import expenseApi from "../api/expense.api";
import RecordForm from "../components/RecordForm";
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
  const refInputs = useRef([]);
  const intialRecord = { date: new Date().toISOString().slice(0, 10) };
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

    setRecords((list) =>
      month
        ? list.filter(
            (record) => new Date(record.date).getMonth() + 1 === month
          )
        : list
    );
  }, [month]);

  const { mutateAsync: addRecord } = useMutation({
    mutationFn: (record, user) => expenseApi.add(record, user),
  });

  const handleSaveRecord = (refs) => {
    const item = refs.current[1].value;
    const amount = refs.current[2].value;

    if (!item || !amount) {
      alert("유효한 항목, 금액을 입력해주세요.");
      return;
    }

    const newRecord = {
      date: refs.current[0].value,
      item,
      amount,
      description: refs.current[3].value,
    };
    addRecord(newRecord, user)
      .then(() => setRecords([...records, newRecord]))
      .catch((e) => {
        console.error(e);
        alert("새로고침 후 재시도 해주세요.");
      });
  };

  return (
    <HomePageWrppaer>
      <SectionCreateCashRecord>
        <RecordForm refer={refInputs} record={intialRecord} />
        <button onClick={() => handleSaveRecord(refInputs)}>저장</button>
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

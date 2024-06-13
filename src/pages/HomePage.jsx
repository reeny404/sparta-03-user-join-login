import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as UUID_v4 } from "uuid";
import { Input } from "../components/Input";
import { RecordList } from "../components/RecordList";
import { ADD_RECORD } from "../redux/reducers/spendings.reducer";
import LocalStorage, { KEY } from "../utils/LocalStorage";
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

  const dispatch = useDispatch();

  const handleSaveRecord = () => {
    if (!item || !amount) {
      alert("유효한 항목, 금액을 입력해주세요.");
      return;
    }

    dispatch({
      type: ADD_RECORD,
      payload: {
        id: UUID_v4(),
        date,
        item,
        amount,
        description,
      },
    });

    setItem("");
    setAmount("");
    setDescription("");
  };

  useEffect(() => {
    LocalStorage.set(KEY._02_MONTH, month);
  }, [month]);

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
        <RecordList month={month} />
      </SectionCashRecords>
    </HomePageWrppaer>
  );
}

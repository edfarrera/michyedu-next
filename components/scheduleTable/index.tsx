import { ReactNode } from "react";

import styles from "./scheduleTable.module.css";
import { IconHeader } from "../iconHeader";

interface ScheduleTableProps {
  header: ReactNode;
  schedule: { time: string; activity: string }[];
  iconSource: string;
}

export const ScheduleTable: React.FC<ScheduleTableProps> = ({
  header,
  iconSource,
  schedule,
}) => {
  return (
    <div className={styles.container}>
      <IconHeader title={header} icon={iconSource} className={styles.header} />
      <table className={styles.table}>
        <tbody className="grid gap-3">
          {schedule.map(({ time, activity }) => (
            <tr key={activity}>
              <td className="pr-7 text-nowrap">{time}</td>
              <td className="font-semibold">{activity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

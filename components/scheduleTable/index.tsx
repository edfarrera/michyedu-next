import { ReactNode } from "react";
import Image from "next/image";

import styles from "./scheduleTable.module.css";

interface ScheduleTableProps {
  header: string | ReactNode;
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
      <Image
        src={iconSource}
        width={55}
        height={55}
        className={styles.icon}
        alt=""
      />
      <h4 className={styles.header}>{header}</h4>
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

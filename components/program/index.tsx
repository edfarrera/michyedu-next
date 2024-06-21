import { ScheduleTable } from "../scheduleTable";

const saturdaySchedule = [
  { time: "03:40 PM", activity: "RECEPCIÓN" },
  { time: "04:00 PM", activity: "CEREMONIA SIMBÓLICA" },
  { time: "05:00 PM", activity: "COCTEL DE BIENVENIDA" },
  { time: "06:30 PM", activity: "BANQUETE" },
  { time: "07:30 PM", activity: "FIESTA" },
];
const sundaySchedule = [
  { time: "05:30 PM", activity: "RECEPCIÓN" },
  { time: "06:30 PM", activity: "TAQUIZA" },
  { time: "07:00 PM", activity: "MARIACHI" },
  { time: "08:00 PM", activity: "KARAOKE" },
];

export const Program = () => {
  return (
    <section
      id="programa"
      className="content-grid bg-[var(--orange-background)] text-[color:var(--light-text)]"
    >
      <h3 className="text-[color:#af440e] ">Programa</h3>
      <h2>Eventos</h2>
      <p>
        ¡Aprovechemos que estamos juntos! Nos vemos en la boda y torna-boda al
        día siguiente para dar el grito juntos.
      </p>

      <div className="flex flex-col lg:flex-row gap-7 mt-7">
        <ScheduleTable
          header={
            <>
              Sábado <b>14</b> de septiembre
            </>
          }
          iconSource="/images/rings.png"
          schedule={saturdaySchedule}
        />
        <ScheduleTable
          header={
            <>
              Domingo <b>15</b> de septiembre
            </>
          }
          iconSource="/images/cactus-heart.png"
          schedule={sundaySchedule}
        />
      </div>
    </section>
  );
};

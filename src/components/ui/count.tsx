import React, { useEffect, useState } from "react";
import { intervalToDuration, formatDuration } from "date-fns";
import { id } from "date-fns/locale";

const Page = () => {
  const [formattedDuration, setFormattedDuration] = useState("");

  useEffect(() => {
    const startDate = new Date(2003, 3, 9);
    const updateDuration = () => {
      const now = new Date();
      const duration = intervalToDuration({ start: startDate, end: now });
      const formatted = formatDuration(duration, {
        format: [
          "years",
          "months",
          "weeks",
          "days",
          "hours",
          "minutes",
          "seconds",
        ],
        locale: id,
      });
      setFormattedDuration(formatted || "Menghitung waktu...");
    };

    updateDuration(); // Memperbarui waktu saat komponen dimuat
    const intervalId = setInterval(updateDuration, 1000); // Memperbarui waktu setiap detik

    return () => clearInterval(intervalId); // Membersihkan interval ketika komponen di-unmount
  }, []);

  return <div>{`${formattedDuration}`}</div>;
};

export default Page;

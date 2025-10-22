"use client";
import React from "react";

const SectionHeader = ({
  title,
  subtitle,
  description,
  className,
}: {
  className?: string,
  title: string,
  subtitle?: string,
  description?: string,
}) => {
  const styles = `text-center flex flex-col justify-center items-center ${className}`;

  return (
    <div className={styles}>
      <span className="underline decoration-1 decoration-red-500">
        {subtitle}
      </span>
      <h2 className="font-display tracking-wide text-4xl font-medium text-gray-50">
        {title}
      </h2>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

export default SectionHeader;

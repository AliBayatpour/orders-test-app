type Props = {
  fill: string;
};

const chevronDown: React.FC<Props> = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill}
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default chevronDown;
interface SearchProps {
  value: string;
  placeholder: string;
  className?: string;
  onChange: (value: string) => void;
}

export const Search = ({
  value,
  placeholder,
  className,
  onChange,
}: SearchProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  return (
    <div className={className}>
      <input
        className="border border-gray-300 rounded-md p-2"
        value={value}
        onChange={handleChange}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;

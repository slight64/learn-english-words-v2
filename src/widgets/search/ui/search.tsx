import { useEffect, useState } from 'react';

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
  const [search, setSearch] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(search);
    }, 400);
    return () => clearTimeout(timeout);
  }, [search, onChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className={className}>
      <input
        className="border border-gray-300 rounded-md p-2"
        value={search}
        onChange={handleChange}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;

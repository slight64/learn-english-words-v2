import { wordsApi } from '@/entities/word/model/words-api';
import { WordCard } from '@/entities/word/ui/word-card';
import { Button } from '@/shared/components/ui/button';
import Search from '@/widgets/search';
import { SortAsc, SortDesc } from 'lucide-react';
import { useMemo, useState } from 'react';
import { toast } from 'sonner';

const LearnPage = () => {
  const [search, setSearch] = useState('');
  const [sortType, setSortType] = useState<'asc' | 'desc'>('asc');
  const { data, isLoading } = wordsApi.useGetWordsQuery();
  const [deleteWord, { isError }] = wordsApi.useDeleteWordMutation();
  const handleDelete = async (id: string) => {
    try {
      await deleteWord(id).unwrap();
    } catch (e) {
      throw new Error(e as string);
    }
  };

  const filteredData = data?.filter((item) => {
    if (item.word.toLowerCase().includes(search.toLowerCase())) {
      return item;
    }
    if (item.translation.toLowerCase().includes(search.toLowerCase())) {
      return item;
    }
  });

  const sortedData = useMemo(
    () =>
      filteredData?.sort((a, b) => {
        if (sortType === 'asc') {
          return a.word.localeCompare(b.word);
        }
        return b.word.localeCompare(a.word);
      }),
    [filteredData, sortType]
  );

  const handleSort = () => {
    setSortType(sortType === 'asc' ? 'desc' : 'asc');
  };

  if (isError) {
    toast.error('Ошибка при удалении слова');
  }

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div className="px-10 py-8 mx-auto">
      <h1 className="text-2xl font-bold">Слова для изучения</h1>
      <div className="flex gap-4 items-center mt-4 mb-4">
        <Search value={search} placeholder="Поиск" onChange={setSearch} />
        <Button onClick={handleSort}>
          {sortType === 'asc' ? <SortAsc /> : <SortDesc />}
        </Button>
      </div>

      <div className="mt-10 flex flex-col gap-4">
        {sortedData &&
          sortedData.map((word) => (
            <WordCard
              key={word.id}
              id={word.id}
              word={word.word}
              translation={word.translation}
              onDelete={handleDelete}
            ></WordCard>
          ))}
      </div>
    </div>
  );
};

export default LearnPage;

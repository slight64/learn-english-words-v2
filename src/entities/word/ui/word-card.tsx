import { DeleteWordDialog } from '@/features/words/delete-word/ui/delete-word-dialog';
import { Button } from '@/shared/components/ui/button';
import { Link } from 'react-router-dom';
import { Word } from '../model/types';

interface WordCardProps extends Omit<Word, 'createdAt'> {
  onDelete: (id: string) => void;
}

export function WordCard({ id, word, translation, onDelete }: WordCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <div>
        <h3 className="font-medium">{word}</h3>
        <p className="text-sm text-gray-500">{translation}</p>
      </div>
      <Link to={`/learn/${id}`}>Редактировать</Link>
      <DeleteWordDialog wordId={id} wordText={word} onDelete={onDelete}>
        <Button variant="ghost" size="sm">
          Удалить
        </Button>
      </DeleteWordDialog>
    </div>
  );
}

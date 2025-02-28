import { DeleteWordDialog } from '@/features/words/delete-word/ui/delete-word-dialog';
import { Button } from '@/shared/ui/button';

interface WordCardProps {
  id: number;
  word: string;
  translation: string;
  onDelete: (id: number) => void;
}

export function WordCard({ id, word, translation, onDelete }: WordCardProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <div>
        <h3 className="font-medium">{word}</h3>
        <p className="text-sm text-gray-500">{translation}</p>
      </div>
      <DeleteWordDialog wordId={id} wordText={word} onDelete={onDelete}>
        <Button variant="ghost" size="sm">
          Удалить
        </Button>
      </DeleteWordDialog>
    </div>
  );
}

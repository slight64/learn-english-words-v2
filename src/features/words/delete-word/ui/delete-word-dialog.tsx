import { Button } from '@/shared/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog';
import { toast } from 'sonner';

interface DeleteWordDialogProps {
  wordId: number;
  wordText: string;
  onDelete: (id: number) => void;
  children: React.ReactNode;
}

export function DeleteWordDialog({
  wordId,
  wordText,
  onDelete,
  children,
}: DeleteWordDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="text-black bg-slate-200">
        <DialogHeader>
          <DialogTitle>Удалить слово</DialogTitle>
          <DialogDescription>
            Вы уверены, что хотите удалить слово "{wordText}"? Это действие
            нельзя отменить.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            className="bg-red-500 hover:bg-red-300"
            onClick={() => {
              onDelete(wordId);
              toast.success('Слово удалено');
            }}
          >
            Удалить
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

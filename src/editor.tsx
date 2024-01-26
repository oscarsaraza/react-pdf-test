import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";

export default function Editor({
  onChange,
}: {
  onChange: (json: any) => void;
}) {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text],
    content: "",
    onUpdate: ({ editor }) => onChange(editor.getJSON()),
  });

  return <EditorContent editor={editor} />;
}

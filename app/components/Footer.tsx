export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-(--border) bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-(--text-muted)">
          © {new Date().getFullYear()} MFL. Todos os direitos reservados.
        </p>
        <p className="text-sm text-(--text-muted) mt-2">
          
        </p>
      </div>
    </footer>
  );
}

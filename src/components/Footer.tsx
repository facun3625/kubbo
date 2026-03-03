const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-heading text-lg font-bold tracking-wide text-foreground lowercase">
          kubbo
        </span>
        <span className="text-xs text-muted-foreground font-medium">
          © 2026 kubbo. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

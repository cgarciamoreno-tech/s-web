const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/30 text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sierrabus — Alquiler de autocares en Madrid. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;

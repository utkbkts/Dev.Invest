const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-xl text-gray-800">
          Üzgünüz, aradığınız sayfa bulunamadı!
        </p>
        <p className="mt-2 text-gray-600">
          Belki aşağıdaki butonlardan birine göz atmak istersiniz:
        </p>
        <div className="mt-6">
          <a href="/" className="btn btn-primary">
            Anasayfaya Dön
          </a>
          <a href="/contact" className="btn btn-secondary ml-4">
            İletişim
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

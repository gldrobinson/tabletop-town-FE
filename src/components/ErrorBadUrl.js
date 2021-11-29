import Header from "./Header";

const ErrorBadUrl = () => {
  return (
    <main className="error_bad_url">
      <Header />
      <h3 className="bad_url_message">Sorry that URL does not exist</h3>
    </main>
  );
};

export default ErrorBadUrl;

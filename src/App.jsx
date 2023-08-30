import './App.scss';
import {
	BannerTop,
	Footer,
	Header,
	QuestionBanner,
	ContactSection,
	QuestionSection,
	MainForm,
} from './components/';

function App() {
	return (
		<div className="root">
			<BannerTop />
			<Header />
			<MainForm />
			<QuestionSection />
			<QuestionBanner />
			<ContactSection />
			<Footer />
		</div>
	);
}

export default App;

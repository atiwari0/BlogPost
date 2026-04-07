import Header from '../Common/Header';
import Footer from '../Common/Footer';

function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            
            <main className="grow flex items-center justify-center p-6">
                <div className="bg-white p-8 rounded-xl w-full max-w-md border border-gray-100">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>
                    
                    <form className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1">
                           
                            <input 
                                type="text" 
                                placeholder="Name" 
                                className="p-3 rounded-lg border border-gray-300 transition"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="p-3 rounded-lg border border-gray-300 transition"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <textarea 
                                rows="4"
                                placeholder="Message" 
                                className="p-3 rounded-lg border border-gray-300 transition"
                            ></textarea>
                        </div>

                        <button 
                            type="button" 
                            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default ContactPage;
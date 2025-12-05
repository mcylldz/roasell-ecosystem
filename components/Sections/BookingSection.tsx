import React from 'react';
import { Calendar } from 'lucide-react';
import BookingForm from './BookingForm';

const BookingSection: React.FC = () => {
    return (
        <section id="booking" className="py-8 md:py-16 bg-white/5 relative">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-6 md:mb-8">
                        <h2 className="text-xl md:text-3xl font-bold mb-1 md:mb-2">Uzmanlarımızla 1-1 Analiz</h2>
                        <p className="text-gray-400 text-xs md:text-sm">Takvimden size uygun zamanı seçin.</p>
                    </div>

                    {/* Booking Form */}
                    <BookingForm />
                </div>
            </div>
        </section>
    );
};

export default BookingSection;


function bookingApp() {
    return {
        mobileNav: false, filter: 'All', search: '', modal: false, selectedService: null,
        lightbox: false, galleryIndex: 0, faqOpen: null, success: false, toast: false, toastMessage: '',
        testimonialIndex: 0, pauseSlider: false,
        today: new Date().toISOString().split('T')[0],
        form: { name: '', phone: '', address: '', service: '', date: '', time: '', message: '' },

        navLinks: [
            ['Home', '#home'], ['Services', '#services'], ['Gallery', '#gallery'], ['About', '#about'], ['Booking', '#booking'], ['Contact', '#contact']
        ],

        trustItems: [
            { hi: 'विश्वसनीय कार्य', en: 'Trusted Work', icon: '🦺' },
            { hi: 'उचित दर', en: 'Fair Pricing', icon: '₹' },
            { hi: 'अनुभवी कारीगर', en: 'Experienced Technicians', icon: '🔧' },
            { hi: 'बेहतर सेवा', en: 'Better Service', icon: '🛡️' }
        ],

        features: [
            { icon: '🛡️', title: 'सुरक्षित काम', text: 'वायरिंग और रिपेयर में सुरक्षा एवं गुणवत्ता को प्राथमिकता।' },
            { icon: '₹', title: 'उचित दर', text: 'काम और सामग्री के अनुसार स्पष्ट एवं उचित pricing।' },
            { icon: '🔧', title: 'अनुभवी कारीगर', text: 'घरेलू और कमर्शियल इलेक्ट्रिकल काम का practical experience।' },
            { icon: '⚡', title: 'समय पर सेवा', text: 'बुकिंग के अनुसार service coordination और बेहतर response।' },
            { icon: '📦', title: 'सामग्री विकल्प', text: 'काम की जरूरत के अनुसार material-inclusive estimates उपलब्ध।' },
            { icon: '🏅', title: '1 Year Maintenance', text: 'विश्वास के लिए 1 वर्ष की नि:शुल्क मेंटेनेंस सुविधा।' }
        ],

        services: [
            { id: 'house-wiring', name_hi: 'हाउस वायरिंग', name_en: 'House Wiring', type: 'Residential', icon: 'cable', image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80', description_hi: 'नए मकानों के लिए संपूर्ण सुरक्षित वायरिंग सेवा।', description_en: 'Complete safe wiring solutions for new homes.', price_range: 'Price on Request' },
            { id: 'switchboard', name_hi: 'स्विचबोर्ड एवं सॉकेट', name_en: 'Switchboard & Socket Installation', type: 'Installation', icon: 'plug', image: 'https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?auto=format&fit=crop&w=900&q=80', description_hi: 'नए स्विच, सॉकेट और modular switchboard की फिटिंग।', description_en: 'Professional switchboard and socket installation.', price_range: 'Price on Request' },
            { id: 'fan-light', name_hi: 'पंखा एवं लाइट फिटिंग', name_en: 'Fan & Light Fitting', type: 'Installation', icon: 'lightbulb', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80', description_hi: 'सीलिंग फैन, LED, झूमर और अन्य light fitting।', description_en: 'Fan, LED, chandelier and light fitting service.', price_range: 'Price on Request' },
            { id: 'panel-repair', name_hi: 'MCB पैनल रिपेयर', name_en: 'MCB / DB Panel Repair', type: 'Repair', icon: 'gauge', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80', description_hi: 'फॉल्ट डायग्नोसिस और distribution board की मरम्मत।', description_en: 'Fault diagnosis and distribution board repair.', price_range: 'Price on Request' },
            { id: 'inverter', name_hi: 'इन्वर्टर एवं स्टेबलाइजर', name_en: 'Inverter & Stabilizer Setup', type: 'Installation', icon: 'battery', image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=900&q=80', description_hi: 'इन्वर्टर, बैटरी और स्टेबलाइजर की wiring एवं setup।', description_en: 'Inverter, battery and stabilizer wiring/setup.', price_range: 'Price on Request' },
            { id: 'short-circuit', name_hi: 'शॉर्ट-सर्किट रिपेयर', name_en: 'Short-Circuit Repair', type: 'Repair', icon: 'zap', image: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=900&q=80', description_hi: 'फॉल्ट खोजकर short-circuit और tripping समस्या का समाधान।', description_en: 'Fault tracing and short-circuit/tripping repair.', price_range: 'Price on Request' },
            { id: 'commercial', name_hi: 'ऑफिस / कमर्शियल वायरिंग', name_en: 'Commercial / Office Wiring', type: 'Commercial', icon: 'building', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80', description_hi: 'ऑफिस और commercial spaces के लिए structured electrical wiring।', description_en: 'Structured electrical wiring for offices and commercial spaces.', price_range: 'Price on Request' },
            { id: 'hotel', name_hi: 'होटल इलेक्ट्रिकल वर्क', name_en: 'Hotel Electrical Work', type: 'Commercial', icon: 'hotel', image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=80', description_hi: 'होटल और hospitality spaces के लिए electrical work।', description_en: 'Electrical work for hotels and hospitality spaces.', price_range: 'Price on Request' },
            { id: 'ac-point', name_hi: 'AC पॉइंट वायरिंग', name_en: 'AC Point Wiring', type: 'Installation', icon: 'snowflake', image: './img/1.jpg', description_hi: 'AC के लिए सुरक्षित dedicated point और wiring।', description_en: 'Dedicated AC point and safe wiring.', price_range: 'Price on Request' },
            { id: 'old-wiring', name_hi: 'पुरानी वायरिंग बदलना', name_en: 'Old Wiring Replacement', type: 'Repair', icon: 'refresh', image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80', description_hi: 'पुरानी या खराब wiring की जांच और replacement।', description_en: 'Inspection and replacement of old or damaged wiring.', price_range: 'Price on Request' }
        ],

        gallery: [
            './img/Profile.png',
            './img/1.jpg',
            'https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?auto=format&fit=crop&w=900&q=85',
            'https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=900&q=85',
            'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85',
            'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85'
        ],

        testimonials: [
            { name: 'अमित सिंह', locality: 'Lucknow', quote: 'काम साफ-सुथरा और समय पर हुआ। वायरिंग की पूरी जानकारी भी समझाई।' },
            { name: 'संजय वर्मा', locality: 'Bijnor Road, Lucknow', quote: 'MCB panel की समस्या जल्दी ठीक कर दी। Service और व्यवहार दोनों अच्छे रहे।' },
            { name: 'Neha Sharma', locality: 'Lucknow', quote: 'Fan और light fitting बहुत अच्छी हुई। Pricing भी reasonable लगी।' },
            { name: 'Rahul Gupta', locality: 'Lucknow', quote: 'House wiring के लिए अच्छा experience रहा। Team professional थी।' }
        ],

        faqs: [
            { q: 'आप किन क्षेत्रों में सेवा देते हैं?', a: 'मुख्य रूप से रॉयल सिटी, बिजनौर रोड और लखनऊ के आसपास के क्षेत्रों में सेवा। दूर के काम के लिए पहले फोन पर availability पूछें।' },
            { q: 'क्या pricing पहले से तय होती है?', a: 'छोटे standard jobs के लिए starting estimate दिया गया है। बड़े wiring/commercial काम का final estimate site visit और scope देखकर तय किया जाएगा।' },
            { q: 'क्या warranty / maintenance मिलती है?', a: 'व्यवसाय की दी गई जानकारी के अनुसार 1 वर्ष की नि:शुल्क मेंटेनेंस सुविधा उपलब्ध है। काम के प्रकार और शर्तें booking के समय confirm करें।' },
            { q: 'क्या emergency service उपलब्ध है?', a: 'Availability समय और location पर निर्भर करेगी। तत्काल समस्या में सीधे फोन करें।' },
            { q: 'Payment के कौन-कौन से तरीके हैं?', a: 'Payment mode booking/काम के समय confirm करें।' }
        ],

        get types() { return ['Residential', 'Commercial', 'Repair', 'Installation']; },
        get filteredServices() {
            const q = this.search.trim().toLowerCase();
            return this.services.filter(s => {
                const typeOK = this.filter === 'All' || s.type === this.filter;
                const text = (s.name_hi + ' ' + s.name_en + ' ' + s.description_hi).toLowerCase();
                return typeOK && (!q || text.includes(q));
            });
        },

        init() {
            setInterval(() => {
                if (!this.pauseSlider) this.nextTestimonial();
            }, 5000);
        },

        book(service) {
            this.form.service = service.id;
            document.querySelector('#booking').scrollIntoView({ behavior: 'smooth' });
            this.showToast(service.name_hi + ' booking के लिए चुनी गई।');
        },

        submitBooking() {
            const message = this.bookingWhatsAppMessage();
            const whatsapp = `https://wa.me/919161419628?text=${encodeURIComponent(message)}`;
            window.open(whatsapp, '_blank', 'noopener,noreferrer');

            this.success = true;
            this.showToast('Booking details WhatsApp पर भेजने के लिए तैयार हैं।');
            setTimeout(() => this.success = false, 7000);
        },

        showToast(message) {
            this.toastMessage = message; this.toast = true;
            setTimeout(() => this.toast = false, 2800);
        },

        nextTestimonial() { this.testimonialIndex = (this.testimonialIndex + 1) % this.testimonials.length; },
        prevTestimonial() { this.testimonialIndex = (this.testimonialIndex - 1 + this.testimonials.length) % this.testimonials.length; },
        nextGallery() { this.galleryIndex = (this.galleryIndex + 1) % this.gallery.length; },
        prevGallery() { this.galleryIndex = (this.galleryIndex - 1 + this.gallery.length) % this.gallery.length; },

        bookingWhatsAppMessage() {
            const selected = this.services.find(s => s.id === this.form.service);
            const serviceName = selected
                ? `${selected.name_hi} (${selected.name_en})`
                : (this.form.service || '-');

            return `नमस्ते R.K. Electric,

*BOOKING REQUEST*

*नाम:* ${this.form.name || '-'}
*फोन:* ${this.form.phone || '-'}
*पता / Locality:* ${this.form.address || '-'}
*Service:* ${serviceName}
*Preferred Date:* ${this.form.date || '-'}
*Preferred Time:* ${this.form.time || 'Not specified'}
*Details:* ${this.form.message || 'None'}

Please confirm my booking request.`;
        },

        whatsappUrl() {
            const text = this.bookingWhatsAppMessage();
            return 'https://wa.me/919161419628?text=' + encodeURIComponent(text);
        }
    }
}

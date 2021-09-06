import './Faq.css'

function FAQs() {
    const faqLists = [
        {
            id: 1,
            title: 'FAQ #1',
            text: 'Cras sollicitudin sit amet mauris vel tempus. In sed nisi consequat, ornare diam sed, fermentum nisi. Vestibulum imperdiet sit amet arcu sed efficitur.',
        },
        {
            id: 2,
            title: 'FAQ #2',
            text: 'Cras sollicitudin sit amet mauris vel tempus. In sed nisi consequat, ornare diam sed, fermentum nisi. Vestibulum imperdiet sit amet arcu sed efficitur.',
        },
        {
            id: 3,
            title: 'FAQ #3',
            text: 'Cras sollicitudin sit amet mauris vel tempus. In sed nisi consequat, ornare diam sed, fermentum nisi. Vestibulum imperdiet sit amet arcu sed efficitur.',
        },
        {
            id: 4,
            title: 'FAQ #4',
            text: 'Cras sollicitudin sit amet mauris vel tempus. In sed nisi consequat, ornare diam sed, fermentum nisi. Vestibulum imperdiet sit amet arcu sed efficitur.',
        },
        {
            id: 5,
            title: 'FAQ #5',
            text: 'Cras sollicitudin sit amet mauris vel tempus. In sed nisi consequat, ornare diam sed, fermentum nisi. Vestibulum imperdiet sit amet arcu sed efficitur.',
        },
        {
            id: 6,
            title: 'FAQ #6',
            text: 'Cras sollicitudin sit amet mauris vel tempus. In sed nisi consequat, ornare diam sed, fermentum nisi. Vestibulum imperdiet sit amet arcu sed efficitur.',
        },
        {
            id: 7,
            title: 'FAQ #7',
            text: 'Cras sollicitudin sit amet mauris vel tempus. In sed nisi consequat, ornare diam sed, fermentum nisi. Vestibulum imperdiet sit amet arcu sed efficitur.',
        },
        {
            id: 8,
            title: 'FAQ #8',
            text: 'Cras sollicitudin sit amet mauris vel tempus. In sed nisi consequat, ornare diam sed, fermentum nisi. Vestibulum imperdiet sit amet arcu sed efficitur.',
        },
        {
            id: 9,
            title: 'FAQ #9',
            text: 'Cras sollicitudin sit amet mauris vel tempus. In sed nisi consequat, ornare diam sed, fermentum nisi. Vestibulum imperdiet sit amet arcu sed efficitur.',
        },
        {
            id: 10,
            title: 'FAQ #10',
            text: 'Cras sollicitudin sit amet mauris vel tempus. In sed nisi consequat, ornare diam sed, fermentum nisi. Vestibulum imperdiet sit amet arcu sed efficitur.',
        }
    ]

    return (
        <section id="faqs" className="mb-4">
            <div className="row mb-4">
                <div className="col-12">
                    <h1 className="mb-4 text-white font-montreux-csdmbditalic">FAQs</h1>
                    <div className="accordion accordion-flush" id="app-faqs-accordion">
                        {faqLists.map((x, k) => (
                            <div className="accordion-item" key={x.id}>
                                <h2 className="accordion-header font-montreux-csdmbd" id={`flush-header-${x.id}`}>
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${x.id}`}>
                                        {x.title}
                                    </button>
                                </h2>
                                <div id={`flush-collapse-${x.id}`} className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                    <div className="accordion-body font-montreux-cs">{x.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQs
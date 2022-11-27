function ProjectPage(): JSX.Element {
    return (
        <main className="main">
            <section className="project container">
                <section className="main__control control container">
                    <h1 className="control__title">TASKER</h1>
                    <button className="control__button">+ ADD NEW PROJECT</button>
                </section>
                <div className="project__list">
                    <a href="#" className="project__card">
                        <div className="card__color-bar">
                            <svg
                                className="card__color-bar-wave"
                                width="100%"
                                height="10"
                            >
                            </svg>
                        </div>
                        <div className="card__textarea-wrap">
                            <p className="project__text">
                                Project 1
                            </p>
                        </div>
                    </a>
                    <a href="#" className="project__card">
                        <div className="card__color-bar">
                            <svg
                                className="card__color-bar-wave"
                                width="100%"
                                height="10"
                            >
                            </svg>
                        </div>
                        <div className="card__textarea-wrap">
                            <p className="project__text">
                                Project 2
                            </p>
                        </div>
                    </a>
                    <a href="#" className="project__card">
                        <div className="card__color-bar">
                            <svg
                                className="card__color-bar-wave"
                                width="100%"
                                height="10"
                            >
                            </svg>
                        </div>
                        <div className="card__textarea-wrap">
                            <p className="project__text">
                                Project 3
                            </p>
                        </div>
                    </a>
                </div >
            </section >
        </main>
    );
}

export default ProjectPage;
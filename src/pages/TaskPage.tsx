
function TaskPage(): JSX.Element {
    return (
        <div>
            <div style={{ display: "none" }}>
                <svg>
                    <symbol id="wave" viewBox="0 0 159 10" preserveAspectRatio="none">
                        <g
                            fill="none"
                            fill-rule="nonzero"
                            stroke-linecap="square"
                            stroke-width="5"
                        >
                            <path d="M4 4l9.257 2.463L21.367 4l7.927 2.463L38.736 4l9.117 2.463L56.103 4l8.685 2.463L73.472 4l8.684 2.463L90.84 4l8.684 2.463L108.208 4l8.684 2.463L125.576 4l8.684 2.463L142.943 4M146.423 4l9.257 2.463" />
                        </g>
                    </symbol>
                </svg>
            </div>

            <main className="main">
                <section className="main__control control container">
                    <h1 className="control__title">TASKER</h1>
                    <button className="control__button">+ ADD NEW TASK</button>
                </section>



                <section className="board container">
                    <section className="board__list">
                        <div className="board__column column">
                            <h2 className="column__title column__title--queue">Queue</h2>
                            <div className="board__tasks">
                                <article className="card card--black">

                                    <div className="card__inner">
                                        <div className="card__control">
                                            <button type="button" className="card__btn card__btn--edit">
                                                edit
                                            </button>
                                        </div>
                                        <div className="card__header">
                                            <h3 className="card__number">1</h3>
                                            <p className="card__title">Title 1</p>
                                        </div>
                                        <div className="card__color-bar">
                                            <svg
                                                className="card__color-bar-wave"
                                                width="100%"
                                                height="10"
                                            >
                                            </svg>
                                        </div>

                                        <div className="card__textarea-wrap">
                                            <p className="card__text">
                                                Example task with default color.
                                            </p>
                                        </div>

                                        <div className="card__settings">
                                            <div className="card__details">
                                                <div className="card__dates">
                                                    <div className="card__block card__block--start">
                                                        <p className="card__input-wrap">
                                                            <span className="card__date">Start date:</span>
                                                            <span className="card__date">20 September</span>
                                                        </p>
                                                    </div>
                                                    <div className="card__block card__block--interval">
                                                        <p className="card__input-wrap">
                                                            <span className="card__date">Working hours:</span>
                                                            <span className="card__date">5 hours</span>
                                                        </p>
                                                    </div>
                                                    <div className="card__block card__block--deadline">
                                                        <p className="card__input-wrap">
                                                            <span className="card__date">Finish date:</span>
                                                            <span className="card__date">23 September</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card__status">

                                                </div>
                                                <div className="card__priority">

                                                    <fieldset>
                                                        <legend>Select priority status:</legend>
                                                        <div>
                                                            <input type="radio" id="urgent" value="urgent" name="urg" />
                                                            <label htmlFor="urgent">Urgent</label>

                                                            <input type="radio" id="medium" value="medium" name="med" />
                                                            <label htmlFor="medium">Medium</label>

                                                            <input type="radio" id="secondary" value="secondary" name="sec" />
                                                            <label htmlFor="secondary">Secondary</label>
                                                        </div>
                                                    </fieldset>

                                                </div>
                                                <div className="card__files">
                                                    <input type="file" />
                                                </div>
                                                <div className="card__comments">
                                                    <textarea className="comment" id="comment" name="comment" placeholder="You can leave your comment here"></textarea>
                                                    <button type="submit">Leave comment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </article>

                            </div>
                        </div>
                        <div className="board__column column">
                            <h2 className="column__title column__title--development">Development</h2>
                            <div className="board__tasks">

                            </div>
                        </div>
                        <div className="board__column column">
                            <h2 className="column__title column__title--done">Done</h2>
                            <div className="board__tasks"></div>
                        </div>
                    </section>



                    {/* <button className="load-more" type="button">
                        load more
                    </button> */}
                </section>
            </main>
        </div>
    );
}

export default TaskPage;
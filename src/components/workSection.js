import React from 'react';
import Project from './project';

export default function WorkSection() {
    return (
        <div id="Work">
            <section className="card">
                <aside>
                    <h2>Work</h2>
                </aside>
            </section>
            <section className="card work">
                <Project />
            </section>
        </div>
    );
}

export default class View  {
    _data;

    render(data, render = true) {
        if(!data || (Array.isArray(data)) && data.length === 0 ) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();

        if(!render) return markup;

        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }

    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();

        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll('*'));
        const curElements = Array.from(this._parentElement.querySelectorAll('*'));

        newElements.forEach((newEl, i) => {
            const curEl = curElements[i];

            // Do not update certain flag or class
            if(newEl.classList.contains('fa-play')) return;

            // Updates changed text
            if(!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') {
                curEl.textContent = newEl.textContent;
            }

            // Updates changed ATTRIBUTES
            if(!newEl.isEqualNode(curEl)) {
                Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value));
            }
        });
    }

    _clear() {
        this._parentElement.innerHTML = '';
    }

    renderError(message = this._errorMessage) {
        const markup = `
            <div class="error">
                <p>${message}</p>
            </div> 
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderMessage(message = this._message) {
        const markup = `
            <div class="message">
                <p>${message}</p>
            </div> 
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}
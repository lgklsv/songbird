import View from './View.js';

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function(e){
            const btn = e.target.closest('.gallery__btn');

            if(!btn) return;

            const goToPage = +btn.dataset.goto;
            handler(goToPage);
        });
    }

    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.birds.length / this._data.resultsPerPage);
        // Page 1, and there are other pages 
        if(curPage === 1 && numPages > 1) {
            return `
                <button data-goto="${curPage + 1}" class="regtext gallery__btn gallery__btn_next">
                    <span>Page ${curPage + 1}</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </button> 
            `;
        }        
        // Last page 
        if (curPage === numPages && numPages > 1){
            return `
                <button data-goto="${curPage - 1}" class="regtext gallery__btn gallery__btn_prev">
                    <i class="fa-solid fa-arrow-left"></i>
                    <span>Page ${curPage - 1}</span>
                </button>
            `;
        }
        // Other page
        if (curPage < numPages){
            return `
                <button data-goto="${curPage -1 }" class="regtext gallery__btn gallery__btn_prev">
                    <i class="fa-solid fa-arrow-left"></i>
                    <span>Page ${curPage - 1}</span>
                </button>
                <button data-goto="${curPage + 1}" class="regtext gallery__btn gallery__btn_next">
                    <span>Page ${curPage + 1}</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </button> 
            `;
        }
        // Page 1, and there NO other pages 
        return '';
    }

}

export default new PaginationView();


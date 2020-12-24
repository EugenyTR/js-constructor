export function row(content, styles = '') {
    return `
        <div class="row" style="${styles}">${content}</div>
    `
}

export function col(content) {
    return `
        <div class="col-sm">${content}</div>
    `
}

export function css(styles = {}) {
    if (typeof styles === 'string') return styles;
    const toString = key => `${key}: ${styles[key]}`;
    return Object.keys(styles).map(toString).join(';');
}

export function block(type) {
    return `
        <form name="${type}">
            <h5>${type}</h5>
            <div class="from-group">
                <input class="form-control from-control-sm" name="value" placeholder="value">
            </div>
            <div class="from-group">
                <input class="form-control from-control-sm" name="styles" placeholder="styles">
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
        </form>
        <hr />
    `
}

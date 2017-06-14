export function getName(): string {
    var initials = document.getElementsByClassName('active')[0].textContent;
    if (initials == 'BM')
        return 'Brooks';
    if (initials == 'CP')
        return 'Chandler';
    if (initials == 'DG')
        return 'Daniel';
    if (initials == 'ZS')
        return 'Zoe';
}

// Lógica para recuperar os estados
function populateStates(){
    const stateSelect = document.querySelector('select[name=uf]');

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(res => res.json() ).then(states => {
        for(state of states){
            stateSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    });
}

populateStates();

function getCities(event){
    const citySelect = document.querySelector('select[name=city]');
    const stateInput = document.querySelector('input[name=state]');

    const ufValue = event.target.value;

    const indexOfSelectedState = event.target.selectedIndex;
    stateInput.value = event.target.options[indexOfSelectedState].text;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    citySelect.innerHTML = '<option value="Selecione a cidade</option>';
    citySelect.disabled = true;

    fetch(url).then(res => res.json() ).then(cities => {
        for(city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false;
    });
}

document.querySelector('select[name=uf]').addEventListener('change', getCities);

// itens de coleta

//pegar todos os li's

const itemsToColect = document.querySelectorAll('.items-grid li');

for(const item of itemsToColect){
    item.addEventListener('click', handleSelectedIem);
}

const collectedItems = document.querySelector('input[name=items');
let selectedItems = [];

function handleSelectedIem(event){
    const itemLi = event.target;
    // adicionar ou remover a classe
    itemLi.classList.toggle('selected');

    const itemId = event.target.dataset.id;

    console.log('Item Id: ', itemId);

    //verificar se existems itens selecionados/ ou quais estão selecionados
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId;
        return itemFound;
    });

    if(alreadySelected >= 0){
        // tirar da seleção
        const filteredItems = selectedItems.filter(item =>{
            const itemIsDiferent = item != itemId;
            return itemIsDiferent;
        });

        selectedItems = filteredItems;
    } else{
        // adicionar a seleção
        selectedItems.push(itemId);
    }

    console.log('Selected Items: ', selectedItems);

    // adicionar ao campo escondido
    collectedItems.value = selectedItems;

}
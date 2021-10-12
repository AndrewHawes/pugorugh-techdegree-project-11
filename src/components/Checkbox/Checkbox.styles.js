import styled from 'styled-components';

const Checkbox = styled.label`
  display: grid;
  grid-template-columns: min-content auto;
  gap: 0.5em;
  font-size: 1.5rem;
  color: var(--color-checkbox);
`;

const InputWrapper = styled.span`
    display: grid;
    grid-template-areas: "checkbox";

    & > * {
      grid-area: checkbox;
    }
`;

const Input = styled.input`
  opacity: 0;
  width: 1em;
  height: 1em;
  
  &:checked + span {
    background: var(--color-checkbox);
    border-color: var(--color-checkbox);
    color: var(--color-text);

    svg {
      transform: scale(1);
    }
  }

  &:disabled + span {
    color: var(--disabled);
  }
`;

const Control = styled.span`
    display: inline-grid;
    width: 1em;
    height: 1em;
    border-radius: var(--border-radius);
    border: 0.1em solid var(--color-checkbox-border);

    svg {
      transition: transform 0.05s ease-in 10ms;
      transform: scale(0);
    }
`;

const Label = styled.label`
  line-height: 1;
  color: var(--color-text-dark);
`;

export const S = {
  Checkbox,
  Label,
  InputWrapper,
  Input,
  Control
};


// const Checkbox = styled.label`
//   display: grid;
//   grid-template-columns: min-content auto;
//   gap: 0.5em;
//   font-size: 1.5rem;
//   color: var(--color-checkbox);

//   .checkbox__input {
//     display: grid;
//     grid-template-areas: "checkbox";

//     > * {
//       grid-area: checkbox;
//     }

//     input {
//       opacity: 0;
//       width: 1em;
//       height: 1em;

//       &:checked + .checkbox__control{
//         background: var(--color-checkbox);
//         border-color: var(--color-checkbox);
//         color: white;
//         svg {
//           transform: scale(1);
//         } 
//       }

//       &:disabled + .checkbox__control {
//         color: var(--disabled);
//       }
//     }
//   }

//   .checkbox__control {
//     display: inline-grid;
//     width: 1em;
//     height: 1em;
//     border-radius: var(--border-radius);
//     border: 0.1em solid var(--color-checkbox-border);

//     svg {
//       transition: transform 0.05s ease-in 10ms;
//       transform: scale(0);
//     }
//   }

//   .checkbox__label {
//     line-height: 1;
//     color: var(--color-text-dark);
//   }
// `;
// return (
//   <S.Checkbox class="checkbox">
//     <span className="checkbox__input">
//       <input type="checkbox" id={id} disabled={disabled}/>
//       <span className="checkbox__control">
//         <Check fill="currentColor" />
//       </span>
//     </span>
//     <span className="checkbox__label">{text}Checkbox</span>
//   </S.Checkbox>
// );
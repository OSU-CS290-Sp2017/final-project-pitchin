import * as React from 'react';

export interface ISegButtonProps {
    segments: string[];
    onSelect(selected: number): void 
}

export interface ISegButtonState {
    selected: number
}

export class SegmentButton extends React.Component<ISegButtonProps, ISegButtonState> {
    constructor(props: ISegButtonProps) {
        super(props);
        this.state = {
            selected: 0
        }
    }

    setSelected = (sel: number) => {
        const newState = {
            selected: sel
        }
        this.setState(newState);
        this.props.onSelect(sel);
    }

    render() {
        const buttonsJSX = this.props.segments.map((seg, idx) => {
            return (
                <button className={"seg-button " + 
                    (idx == 0 ? "seg-button-first " : "") + 
                    (idx == this.props.segments.length - 1 ? "seg-button-last " : "") +
                    (idx == this.state.selected ? "seg-button-selected ": "")
                } onClick={() => this.setSelected(idx)}>{this.props.segments[idx]}</button>
            );
        });
        return (
            <span>
                {buttonsJSX}
            </span>
        )
    }
}
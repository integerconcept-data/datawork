import type * as React from 'react';
import { DesignSystemConfig } from './MapProperties';

export interface AliasProperties extends DesignSystemConfig {
    colorFillContentHover: string;
    colorFillAlter: string;
    colorFillContent: string;
    colorBgContainerDisabled: string;
    colorBgTextHover: string;
    colorBgTextActive: string;
    colorBorderBg: string;
    colorSplit: string;
    colorTextPlaceholder: string;
    colorTextDisabled: string;
    colorTextHeading: string;
    colorTextLabel: string;
    colorTextDescription: string;
    colorTextLightSolid: string;
    colorIcon: string;
    colorIconHover: string;
    colorHighlight: string;
    controlOutline: string;
    colorWarningOutline: string;
    colorErrorOutline: string;
    fontSizeIcon: number;
    fontWeightStrong: number;
    controlOutlineWidth: number;
    controlItemBgHover: string;
    controlItemBgActive: string;
    controlItemBgActiveHover: string;
    controlInteractiveSize: number;
    controlItemBgActiveDisabled: string;
    lineWidthFocus: number;
    paddingXXS: number;
    paddingXS: number;
    paddingSM: number;
    padding: number;
    paddingMD: number;
    paddingLG: number;
    paddingXL: number;
    paddingContentHorizontalLG: number;
    paddingContentHorizontal: number;
    paddingContentHorizontalSM: number;
    paddingContentVerticalLG: number;
    paddingContentVertical: number;
    paddingContentVerticalSM: number;
    marginXXS: number;
    marginXS: number;
    marginSM: number;
    margin: number;
    marginMD: number;
    marginLG: number;
    marginXL: number;
    marginXXL: number;
    opacityLoading: number;
    boxShadow: string;
    boxShadowSecondary: string;
    boxShadowTertiary: string;
    linkDecoration: React.CSSProperties['textDecoration'];
    linkHoverDecoration: React.CSSProperties['textDecoration'];
    linkFocusDecoration: React.CSSProperties['textDecoration'];
    controlPaddingHorizontal: number;
    controlPaddingHorizontalSM: number;
    screenXS: number;
    screenXSMin: number;
    screenXSMax: number;
    screenSM: number;
    screenSMMin: number;
    screenSMMax: number;
    screenMD: number;
    screenMDMin: number;
    screenMDMax: number;
    screenLG: number;
    screenLGMin: number;
    screenLGMax: number;
    screenXL: number;
    screenXLMin: number;
    screenXLMax: number;
    screenXXL: number;
    screenXXLMin: number;
    controlTmpOutline: string;
}

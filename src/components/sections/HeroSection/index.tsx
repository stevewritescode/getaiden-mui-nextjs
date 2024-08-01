import * as React from 'react';
import type * as types from 'types';

import MuiBox from '@mui/material/Box';
import MuiGrid from '@mui/material/Grid';
import MuiTypography from '@mui/material/Typography';

export type Props = types.HeroSection & types.StackbitFieldPath;

export const HeroSection: React.FC<Props> = (props) => {
    const { image, 'data-sb-field-path': fieldPath } = props;

    return (
        <MuiBox sx={{ py: { xs: 6, sm: 10 } }} data-sb-field-path={fieldPath}>
            <MuiGrid container spacing={4} justifyContent="center" alignItems="center" direction="column">
                {image?.url && (
                    <MuiGrid item>
                        <MuiBox
                            component="img"
                            src={image.url}
                            alt={image.altText || 'Hero image'}
                            sx={{ width: '100%', maxWidth: 300, height: 'auto' }}
                            data-sb-field-path=".image.url#@src .image.altText#@alt"
                        />
                    </MuiGrid>
                )}
                <MuiGrid item>
                    <MuiTypography variant="h4" align="center" sx={{ mt: 2 }}>
                        hi! i&apos;m aiden.
                    </MuiTypography>
                </MuiGrid>
            </MuiGrid>
        </MuiBox>
    );
};